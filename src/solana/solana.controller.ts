import { Controller, Post, Body } from '@nestjs/common';
import { SolanaService } from './solana.service';

@Controller('solana')
export class SolanaController {
  constructor(private readonly solanaService: SolanaService) {}

  @Post('send-token')
  async sendToken(
    @Body('senderKey') senderKey: string,
    @Body('recipientAddress') recipientAddress: string,
    @Body('amount') amount: number,
  ) {
    return await this.solanaService.sendTransaction(senderKey, recipientAddress, amount);
  }
}