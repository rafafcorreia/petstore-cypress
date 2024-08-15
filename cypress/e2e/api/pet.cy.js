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

    ;listaPets.forEach((element, index) => {
        it(`POST Pet DDT - ${element.name}`, () => {
            cy.request({
                method: 'POST',
                url: '/pet',
                body: listaPets[index]
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.id).to.eq(listaPets[index].id)
                expect(body.category.name).to.eq(listaPets[index].category.name)
                expect(body.name).to.eq(listaPets[index].name)
                expect(body.tags[0].id).to.eq(listaPets[index].tags[0].id)
                expect(body.tags[0].name).to.eq(listaPets[index].tags[0].name)
                expect(body.status).to.eq(listaPets[index].status)
            })
        });

        it(`DELETE Pet DDT - ${element.name}`, () => {
            cy.request({
                method: 'DELETE',
                url: `/pet/${listaPets[index].id}`
            }).then(({status, body}) => {
                expect(status).to.eq(200)
                expect(body.code).to.eq(200)
                expect(body.type).to.eq('unknown')
                expect(body.message).to.eq(`${listaPets[index].id}`)
            })
        });
    });
});
