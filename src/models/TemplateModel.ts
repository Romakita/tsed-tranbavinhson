import {Property, Title} from "@tsed/common";
import {Description} from "@tsed/swagger";

export class TemplateRequestModel {
  @Title("name")
  @Description("Name of template")
  @Property()
  name: string;
}
