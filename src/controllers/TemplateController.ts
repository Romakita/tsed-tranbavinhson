import {Docs} from "@tsed/swagger";
import {BodyParams, ContentType, Controller, ConverterService, Post, Req, Res} from "@tsed/common";
import {TemplateRequestModel} from "../models/TemplateModel";

@Controller("/templates")
@Docs("api-v1")
export class TemplateController {
  constructor(private converterService: ConverterService) {

  }

  @Post("/")
  @ContentType("application/json")
  async create(
    // @HeaderParams("clientId") clientId: number,
    @BodyParams() templateRequest: TemplateRequestModel,
    @Req() req: Req,
    @Res() res: Res
  ) {
    console.log(this.converterService.deserialize(req.body, TemplateRequestModel)); // TemplateRequestModel { name: 'string' }
    console.log(templateRequest.name); // return string
    console.log(req.body.name); // return string
  }
}
