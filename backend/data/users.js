import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'adminUser',
        email: 'admin@example.com',
        password: bcrypt.hashSync('password', 10),
        isAdmin: true
    },
    {
        name: 'Riad',
        email: 'riri@example.com',
        password: bcrypt.hashSync('password', 10),
    },
    {
        name: 'Tinetendo',
        email: 'tine@example.com',
        password: bcrypt.hashSync('password', 10),
    }
]

export default users