export type ScrollState = {
  scrollY: number;
  progress: number;
  velocity: number;
};

type ScrollSubscriber = (state: ScrollState) => void;
type SubscribeOptions = {
  /** High = every Lenis frame (scroll progress). Normal = once per animation frame. */
  priority?: "high" | "normal";
};

const defaultState: ScrollState = {
  scrollY: 0,
  progress: 0,
  velocity: 0,
};

class ScrollCoordinator {
  private highPriority = new Set<ScrollSubscriber>();
  private normalPriority = new Set<ScrollSubscriber>();
  private state = defaultState;
  private normalRafId = 0;
  private normalDirty = false;

  subscribe(subscriber: ScrollSubscriber, options: SubscribeOptions = {}) {
    const bucket =
      options.priority === "high" ? this.highPriority : this.normalPriority;
    bucket.add(subscriber);
    subscriber(this.state);

    return () => {
      bucket.delete(subscriber);
    };
  }

  publish(next: ScrollState) {
    this.state = next;

    for (const subscriber of this.highPriority) {
      subscriber(next);
    }

    if (!this.normalPriority.size) return;

    this.normalDirty = true;
    if (this.normalRafId) return;

    this.normalRafId = requestAnimationFrame(() => {
      this.normalRafId = 0;
      if (!this.normalDirty) return;
      this.normalDirty = false;
      for (const subscriber of this.normalPriority) {
        subscriber(this.state);
      }
    });
  }

  getState() {
    return this.state;
  }
}

export const scrollCoordinator = new ScrollCoordinator();
