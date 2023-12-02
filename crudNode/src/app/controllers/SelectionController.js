import SelectionRepository from "../repositories/SelectionRepository.js";

class SelectionController {
  async index(req, res) {
    const rows = await SelectionRepository.findAll();
    res.json(rows);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await SelectionRepository.findById(id);
    res.json(row);
  }

  async store(req, res) {
    const selecao = req.body;
    const row = await SelectionRepository.create(selecao);
    res.json(row);
  }

  async update(req, res) {
    const id = req.params.id;
    const selecao = req.body;
    const row = await SelectionRepository.update(selecao, id);
    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await SelectionRepository.delete(id);
    res.json(row);
  }
}
//padrão singleton
export default new SelectionController();
