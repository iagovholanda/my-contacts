const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController {
    async index(request, response) {
        const { orderBy } = request.query
        const categories = await CategoriesRepository.findAll(orderBy)
        return response.json(categories)
    }

    async show(request, response) {
        const { id } = request.params

        const categorie = await CategoriesRepository.findById(id)

        if(!categorie) {
            return response.status(404).json({ message: "Categorie not found"})
        }

        return response.json(categorie)
    }

    async store(request, response) {
        const { name } = request.body

        if(!name) {
            return response.status(404).json({ message: "Name is required"})
        }

        const categorie = await CategoriesRepository.create({ name })
        return response.json(categorie)

    }


    async update(request, response) {
        const { id } = request.params
        const { name } = request.body

        const categorieExists = await CategoriesRepository.findById(id)

        if(!categorieExists) {
            return response.status(404).json({ message: "Categories not found"})
        }

        const categorie = await CategoriesRepository.update(id, { name })

        response.json(categorie)
    }

}

module.exports = new CategoryController()
