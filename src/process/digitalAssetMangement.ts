import { JsonObjectExpression } from "typescript";

type Props = {
  intent: string;
  allRequiredParamsPresent: boolean;
  intentDetectionConfidence: Float32Array;
  parameters: JsonObjectExpression;
};

export default function DigitalAssetManagement(props: Props) {
  console.log(props.intent);
}
