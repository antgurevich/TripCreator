import React from 'react'

export interface Props {
    readonly name: string;
    readonly path: string;
}

const baseClass = 'button'

export const SidebarButton: React.FC<Props> = (props) => {
    return(<h2 className={baseClass}>{props.name}</h2>)
}

export default SidebarButton