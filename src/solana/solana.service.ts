import { Injectable } from '@nestjs/common';
import { Connection, PublicKey, Transaction, Keypair } from '@solana/web3.js';

@Injectable()
export class SolanaService {
  private connection: Connection;

  constructor() {
    this.connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed'); // Usando Solana mainnet
  }

  // Enviar tokens desde una cuenta a otra
  async sendTransaction(senderKey: string, recipientAddress: string, amount: number): Promise<any> {
    try {
      // Crear el objeto de clave privada
      const sender = Keypair.fromSecretKey(Uint8Array.from(senderKey.split(',')));

      // Crear la dirección del destinatario
      const recipient = new PublicKey(recipientAddress);

      // Crear la transacción
      const transaction = new Transaction();
      transaction.add(
        // Aquí puedes agregar instrucciones para enviar tokens
        // Por ejemplo, usando SPL Token
      );

      // Firmar la transacción con la clave del emisor
      const signature = await this.connection.sendTransaction(transaction, [sender]);

      // Confirmar la transacción
      await this.connection.confirmTransaction(signature);

      return { success: true, signature };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}