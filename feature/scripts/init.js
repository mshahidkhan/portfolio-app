Router.reset();
Router.pathname = this.location.pathname;
Router.route(
    'index',
    Router.pathname + '#/index',
    'msk-layout-main',
    {
        tagMainContent: 'msk-main'
    });
Router.route(
    'home',
    Router.pathname + '#/home',
    'layout-home',
    {
        tagMainContent: 'msk-home'
    });
Router.route(
    'profile',
    Router.pathname + '#/profile',
    'layout-home',
    {
        tagMainContent: 'msk-profile'
    });

Router.route(
    'list',
    Router.pathname + '#/index/list',
    'msk-layout-main',
    {
        tagMainContent: 'msk-list'
    });

Router.initialize('router_mount');
