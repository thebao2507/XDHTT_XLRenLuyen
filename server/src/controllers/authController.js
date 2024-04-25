import { loginService } from '../services/auth.js'

export const login = async (req, res) => {
    const { username, password } = req.body;
    /* add condition check become value username and password validate */
    try {
        const data = await loginService(username, password)
        if (data.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json("no record")
        }
    } catch (error) {
        return res.status(501).json(error)
    }
}