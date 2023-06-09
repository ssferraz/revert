const userRepository = require("../repositories/userRepository");

const userController = {

    create: async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            const response = await userRepository.create(user);
            return res.status(201).json({ response, message: "Usuário criado com sucecsso!" });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await userRepository.getAll();
            return res.status(200).json(users);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await userRepository.get(id);

            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado." });;
            }

            return res.status(200).json(user);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    },
    delete: async (userId, res) => {
        try {
            const id = userId;
            const user = await userRepository.get(id);

            if (!user) {
                console.log(user);
                return res.status(404).json({ message: "Usuário não encontrado." });
            }

            const deletedUser = await userRepository.delete(id);

            res.status(200).json({ deletedUser, message: "Usuário removido com sucesso!"});

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    },
    update: async (userId, req, res) => {
        try {
            const id = userId;
            
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            const updatedUser = await userRepository.update(id, user);

            if (!updatedUser) {
                res.status(404).json({ message: "Usuário não encontrado." });
                return;
            }

            return res.status(200).json({ user, message: "Usuário atualizado com sucesso!" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    },
    authenticate: async (req, res) => {
        try{
            const { email, password } = req.body;

            const user = await userRepository.authenticate(email, password);

            if (!user) {
                return res.status(404).json({ message: "Email ou senha inválidos." });
            }

            return res.status(200).json({  user, message: "Usuário autenticado com sucesso!"});

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    }
};

module.exports = userController;
