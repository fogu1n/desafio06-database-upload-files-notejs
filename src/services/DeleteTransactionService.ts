import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransctionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransctionRepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new Error('Transaction dows not exists');
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
