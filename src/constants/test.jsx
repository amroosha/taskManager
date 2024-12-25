const data = {
    org: {
        name: 'slave trade',
        description: 'a small company for trading niggers',
        logo: 'https://www.rollingstone.com/wp-content/uploads/2022/10/Get-Out.jpg?w=1581&h=1054&crop=1',
        tasks: [
            {
                id: 1,
                title: 'task 1',
                description: 'task 1 description',
                createdAt: new Date('2022-10-01'),
                dueDate: new Date('2024-12-31'),
                priority: 1
            },
            {
                id: 2,
                title: 'task 2',
                description: 'task 2 description',
                dueDate: new Date('2025-01-15'),
                createdAt: new Date('2022-10-15'),
                priority: 2
            },
            {
                id: 3,
                title: 'task 3',
                description: 'task 3 description',
                dueDate: new Date('2025-02-01'),
                createdAt: new Date('2022-11-01'),
                priority: 0
            }]
    },
    user: {
        profile: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    }
}

export default data