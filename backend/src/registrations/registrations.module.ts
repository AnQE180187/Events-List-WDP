import { Module } from '@nestjs/common';
import { RegistrationsController } from './registrations.controller';
import { RegistrationService } from './registrations.service';

@Module({
  controllers: [RegistrationsController],
  providers: [RegistrationService]
})
export class RegistrationsModule {}