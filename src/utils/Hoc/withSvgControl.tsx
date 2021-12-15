import React from 'react';


let withSvgControl = <P extends object>(Component: React.ComponentType<P>): React.FC<P & Jsvg> => ({ ...props }: Jsvg) => <Component {...props as P} />;
export default withSvgControl;
