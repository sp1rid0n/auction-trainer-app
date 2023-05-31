export interface NavItem {
    title: string
    link: string
    component: React.FC
    getPageUrl: (routeParams?: any) => string
}