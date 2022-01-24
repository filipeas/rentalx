import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - Definir tipo de retorno
 * [x] - Alterar retorno de erro
 * [x] - Acessar repositório
 * [ ] - Retornar algo (opcional)
 */
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }