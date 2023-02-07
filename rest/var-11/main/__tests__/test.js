const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test put /students/:id', () => {
  
    test('If request body is not sent server should respond with status code 400 and {"message": "body is missing"}', (done) => {
        request(app).put('/students/3')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('body is missing')
                done()
            })
    })

    test('If request body is present but did not follow the specified format, server should respond with status code 400 and {"message": "malformed request"}', (done) => {
        request(app).put('/students/3')
            .send({name : 'x', age : 22})
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('malformed request')
                done()
            })
    })


    test('A non existent student cannot be modified', (done) => {
        request(app).put('/students/13').send({
            name: "aaa",
            address: "nowhere",
            age: 22
        }).expect(404).then(res => {
            expect(JSON.parse(res.text).message).toBe('not found')
            done()
        })
    })

    test('A student can be modified', (done) => {
        request(app).put('/students/3').send({
            name: "aaa",
            address: "nowhere",
            age: 24
        }).expect(202).then(res => {
            expect(JSON.parse(res.text).message).toBe('accepted')
            done()
        })
    })

    test('The student list is valid', (done) => {
        request(app).get('/students').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                let sample = {
                    id:3,
                    name: "aaa",
                    address: "nowhere",
                    age: 24
                }
                expect(response).toHaveLength(10)
                expect(response).toContainEqual(sample)
                done()
            })
    })
})



