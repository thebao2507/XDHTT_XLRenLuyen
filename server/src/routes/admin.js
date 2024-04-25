import express from 'express'
import { 
    count, laydshdsk, laydshk, taods, xoahdrl, taohdsk, danhdauhoanthanh, danhdauhoanthanhsk 
} from '../controllers/adminController.js'

const router = express.Router()

router.get('/counts', count)
router.get('/laydshdsk', laydshdsk)
router.get('/laydshk', laydshk)

router.post('/taods', taods)
router.post('/taohdsk', taohdsk)
router.post('/danhdauhoanthanh', danhdauhoanthanh)
router.post('/danhdauhoanthanhsk', danhdauhoanthanhsk)

router.delete('/xoahdrl/:id', xoahdrl)

export default router