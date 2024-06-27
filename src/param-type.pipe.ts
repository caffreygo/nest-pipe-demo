import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class IntTypePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.metatype === Number) {
      return Number(value)
    }
    return value
  }
}
