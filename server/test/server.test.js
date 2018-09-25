
const expect = require('expect');
const request = require('supertest');
const { app } = require('./../server');
const {testConfig} = require('./seed/seed');

describe('GET /products', () => {
    
    it('should get all products in three different exchange successfuly', (done) => {
        request(app)
            .get(testConfig.productUrl)
            .expect(200)
            .expect((res) => {
                expect(res.body.productList).toBeTruthy();
                expect(res.body.productList.length).toBeGreaterThan(0);
            })
            .end(done);
    });

    
    it('should fail if get product url is wrong', (done) => {
        request(app)
            .get(testConfig.wrongProductUrl)
            .expect(404)
            .expect((res) => {
                expect(res.body.message).toBeTruthy();
            })
            .end(done);
    });
});

describe('GET /products/PRODUCT/prices', () => {
    
    it('should get Product successfuly', (done) => {
        request(app)
            .get(testConfig.productPriceUrl)
            .expect(200)
            .expect((res) => {
                expect(res.body).toBeTruthy();
            })
            .end(done);
    });

    it('should get Product price in three different exchange', (done) => {
        request(app)
            .get(testConfig.productPriceUrl)
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(3);
                expect(res.body[0].exchange).toBe(testConfig.exchangeTypes[0]);
                expect(res.body[1].exchange).toBe(testConfig.exchangeTypes[1]);
                expect(res.body[2].exchange).toBe(testConfig.exchangeTypes[2]);
            })
            .end(done);
    });

    it('should fail on getting Product price', (done) => {
        request(app)
            .get(testConfig.wrongProductPriceUrl)
            .expect(400)
            .expect((res) => {
                expect(res.body.message).toBeTruthy();
            })
            .end(done);
    });
});
