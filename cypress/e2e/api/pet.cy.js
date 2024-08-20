import pet from '../../fixtures/pet.json'
import petNovo from '../../fixtures/petNovo.json'
import listaPets from '../../fixtures/listaPets.json'

describe("CRUD Pet", () => {

    it('POST Pet', () => {
        cy.request({
            method: 'POST',
            url: '/pet',
            body: pet
        }).then(({ status, body }) => {
            expect(status).to.eq(200)
            expect(body.id).to.eq(pet.id)
            expect(body.category.name).to.eq(pet.category.name)
            expect(body.name).to.eq(pet.name)
            expect(body.tags[0].id).to.eq(pet.tags[0].id)
            expect(body.tags[0].name).to.eq(pet.tags[0].name)
            expect(body.status).to.eq(pet.status)
        })
    })

    it('GET Pet', () => {
        cy.request({
            method: 'GET',
            url: `/pet/${pet.id}`
        }).then(({ status, body}) => {
            expect(status).to.eq(200)
            expect(body.id).to.eq(pet.id)
            expect(body.category.name).to.eq(pet.category.name)
            expect(body.name).to.eq(pet.name)
            expect(body.tags[0].id).to.eq(pet.tags[0].id)
            expect(body.tags[0].name).to.eq(pet.tags[0].name)
            expect(body.status).to.eq(pet.status)
        })
    });

    it('PUT Pet', () => {
        cy.request({
            method: 'PUT',
            url: '/pet/',
            body: petNovo
        }).then(({ status, body}) => {
            expect(status).to.eq(200)
            expect(body.id).to.eq(petNovo.id)
            expect(body.category.name).to.eq(petNovo.category.name)
            expect(body.name).to.eq(petNovo.name)
            expect(body.tags[0].id).to.eq(petNovo.tags[0].id)
            expect(body.tags[0].name).to.eq(petNovo.tags[0].name)
            expect(body.status).to.eq(petNovo.status)
        })
    });

    it('DELETE Pet', () => {
        cy.request({
            method: 'DELETE',
            url: `/pet/${pet.id}`
        }).then(({status, body}) => {
            expect(status).to.eq(200)
            expect(body.code).to.eq(200)
            expect(body.type).to.eq('unknown')
            expect(body.message).to.eq(`${pet.id}`)
        })
    });

    ;listaPets.forEach((element) => {
        it(`POST Pet DDT - ${element.name}`, () => {
            cy.request({
                method: 'POST',
                url: '/pet',
                body: element
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.id).to.eq(element.id)
                expect(body.category.name).to.eq(element.category.name)
                expect(body.name).to.eq(element.name)
                expect(body.tags[0].id).to.eq(element.tags[0].id)
                expect(body.tags[0].name).to.eq(element.tags[0].name)
                expect(body.status).to.eq(element.status)
            })
        });

        it(`DELETE Pet DDT - ${element.name}`, () => {
            cy.request({
                method: 'DELETE',
                url: `/pet/${element.id}`
            }).then(({status, body}) => {
                expect(status).to.eq(200)
                expect(body.code).to.eq(200)
                expect(body.type).to.eq('unknown')
                expect(body.message).to.eq(`${element.id}`)
            })
        });
    });
});
