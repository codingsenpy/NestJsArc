import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Ex } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy,){
    constructor(){
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:jwtConstants.secret,
        })
    }
}