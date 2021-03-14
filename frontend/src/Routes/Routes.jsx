const Routes = {
    main:'/',
    login:'/login',
    register:'/register',
    projects:'/projects',
    project:'/project',
    projectWithUndefinedId:'/project/:id',
    create:{
        newProject:'/create/newProject',
        newNotification:'/create/newNotification',
    }
}

export default Routes;