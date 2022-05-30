const routes = [
    {
        name: 'Cadastro',
        path: '/cadastro',
        component: () => import('@/pages/TemplateBase.vue'),
        redirect: '/cadastro/profissional',
        children: [
            {
                name: 'Sobre o profissional',
                path: 'profissional',
                component: () => import('@/pages/SobreProfissional.vue')
            },
            {
                name: 'Sobre o atendimento',
                path: 'atendimento',
                component: () => import('@/pages/SobreAtendimento.vue')
            },
            {
                name: 'Resumo',
                path: 'resumo',
                component: () => import('@/pages/ResumoCadastro.vue')
                
            }
        ]
    },
    {
        name: 'root',
        path: '/',
        redirect: '/cadastro'
    }
]

export default routes;