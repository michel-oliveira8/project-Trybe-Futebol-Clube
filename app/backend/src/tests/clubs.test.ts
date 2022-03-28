import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';
import Clubs from '../database/models/clubs';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes no endpoint /clubs', async () => {
  let chaiHttpResponse: Response;

  const clubsMock = [
    {
      "id": 1,
      "clubName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "clubName": "Bahia"
    },
    {
      "id": 3,
      "clubName": "Botafogo"
    },
  ]

  before(async () => {
    sinon.stub(Clubs, 'findAll')
    .resolves(clubsMock as any)
  })

  after(() => {
    (Clubs.findAll as sinon.SinonStub).restore();
  })

  it('Verifica se retorna uma lista de clubes', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/clubs')

    expect(chaiHttpResponse.status).to.be.eq(200)
    expect(chaiHttpResponse.body).to.be.an('array')
  })
})

describe('Testa o endpoint /clubs/:id', async () => {
  let chaiHttpResponse: Response

  const clubsByIDMock = {
      id: 1,
      clubName: "Avaí/Kindermann"
    }

  before(async () => {
    sinon.stub(Clubs, 'findByPk')
    .resolves(clubsByIDMock as any)
  })

  after(() => {
    (Clubs.findByPk as sinon.SinonStub).restore();
  })

  it('Filtra clubes pelo ID', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/clubs/:id')

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body.id).to.be.eq(1);
  })
})