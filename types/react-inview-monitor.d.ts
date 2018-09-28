import * as React from 'react';
export interface Props {
    /**
     * Used to animate classes in onScrollIntoView, to trigger fade in etc animations
     */
    classNameInView?: string;
    /**
     * Used to hide elements to be animated in.
     */
    classNameNotInView?: string;
    /**
     * Used as a trigger for "scrolled past view", such as for sticky headers
     */
    classNameAboveView?: string;
    /**
     * Used to switch classes on/off, for fixed navigation based on scroll point, etc
     */
    toggleClassNameOnInView?: string;
    /**
     * Used to start passing a prop into an element
     * only when it has been scrolled into view, such as to autoplay a video.
     */
    childPropsInView?: object;
    childPropsNotInView?: object;
    /**
     * Used to turn props on/off based of on view, such as to stop or start a video or an audio.
     */
    toggleChildPropsOnInView?: boolean;
    /**
     * Used to track elements coming into view
     */
    onInView?: (event: React.SyntheticEvent<EventTarget>) => void;
    onNotInView?: (event: React.SyntheticEvent<EventTarget>) => void;
    repeatOnInView?: boolean;
    /**
     * Toggles scroll monitoring only if it returns true. This is helpful because it's easier to
     * toggle this prop, than to tell the application not to use InviewMonitor at all.
     * By default it is a mock function that returns true.
     */
    useInviewMonitor?: () => boolean;

    intoViewMargin: string;
}
declare class InviewMonitor extends React.Component<Props> {
    static defaultProps: {
      classNameNotInView: '',
      childPropsNotInView: {},
      useInviewMonitor: () => true,
      intoViewMargin: '-20%'
    };
    render(): React.ReactElement<any>[];
}
export default InviewMonitor;
