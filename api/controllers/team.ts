import { Request, Response } from 'express';
import { get, post } from '../../services/api-call';
import { createSuccess, createFailure } from '../../utils/api-response';
import config from '../../config';

const createNewMember = async (req: Request, res: Response, next: any) => {
  try {
    const member = req.body;
    const url = `${config.io.host}${config.io.team.new}`;
    const resPayload = post({
      url,
      data: member,
    });
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

const getAllMembers = async (req: Request, res: Response, next: any) => {
  try {
    const url = `${config.io.host}${config.io.team.getMemberAll}`;
    const resPayload = await get({
      url,
    });
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

const getMemberById = async (req: Request, res: Response, next: any) => {
  // try {
  //   const { userid } = req.params;
  //   const sQuery = `SELECT * FROM team WHERE userid='${userid}'`;
  //   const result = await db.query(sQuery, null);
  //   const resPayload = createSuccess(result);
  //   res.send(resPayload);
  // } catch (error) {
  //   const resPayload = createFailure(error);
  //   res.status(500).send(resPayload);
  // }
};

export { createNewMember, getAllMembers, getMemberById };
