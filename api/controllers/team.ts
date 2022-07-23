import { Request, Response } from 'express';
import { get, post } from '../../services/api-call';
import { createSuccess, createFailure } from '../../utils/api-response';
import config from '../../config';

const createNewMember = async (req: Request, res: Response, next: any) => {
  try {
    const member = req.body;
    const url = `${config.io.host}${config.io.team.new}`;
    const resPayload = await post({
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
  try {
    const { userid } = req.params;
    const url = `${config.io.host}${config.io.team.getMember}${userid}`;
    const resPayload = await get({
      url,
    });
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

const getMemberByEmail = async (req: Request, res: Response, next: any) => {
  try {
    const { userEmail } = req.params;
    const url = `${config.io.host}${config.io.team.getMemberByEmail}${userEmail}`;
    const resPayload = await get({
      url,
    });
    res.send(resPayload);
  } catch (error) {
    const resPayload = createFailure(error);
    res.status(500).send(resPayload);
  }
};

export { createNewMember, getAllMembers, getMemberById, getMemberByEmail };
