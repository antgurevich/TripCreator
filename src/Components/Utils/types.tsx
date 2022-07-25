export interface SidebarButtons {
    readonly type: SidebarButtonType,
    readonly name: string,
    readonly url: string,
}

export enum SidebarButtonType {
    HOME = 'HOME',
    ABOUT = 'ABOUT',
    CREATE = 'CREATE',
    PROFILE = 'PROFILE',
}