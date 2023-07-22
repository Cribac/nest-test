import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // instead of using the Record<string, any> type,
  // we should use a DTO class to define the shape of the request body. See the validation chapter for more information.
  // @TODO: add DTO
  // @TODO: add JWT Token
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.validateUser(signInDto.email, signInDto.password)
  }
}
