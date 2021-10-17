import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        password: bcrypt.hashSync('123456', 10),
        dateOfBirth: '2016-05-18',
        isAdmin: true
    },
    {
        name: 'fake',
        email: 'fake@test.com',
        password: bcrypt.hashSync('123456', 10),
        dateOfBirth: '2016-05-18'
    },
    {
        name: 'master User',
        email: 'master@test.com',
        password: bcrypt.hashSync('123456', 10),
        dateOfBirth: '2016-05-18'

    },
]

export default users;