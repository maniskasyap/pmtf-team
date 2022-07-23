import express from 'express';

import {
  createNewMember,
  getAllMembers,
  getMemberById,
  getMemberByEmail,
} from '../controllers';

const router = express.Router();

router.post('/new', createNewMember);
router.get('/getMemberAll', getAllMembers);
router.get('/getMember/:userid', getMemberById);
router.get('/getMemberByEmail/:userEmail', getMemberByEmail);

export default router;
