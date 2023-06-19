/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

// component to combine any 2+ story components
interface CombineStoriesProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
}

export const CombineStories = ({ children }: CombineStoriesProps) => (
    <div style={{ justifyContent: 'flex-start' }}>{children}</div>
);
