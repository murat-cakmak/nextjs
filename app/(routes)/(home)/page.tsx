import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  return (
    <div className="flex flex-row items-center">
      <Button>New Button</Button>
      <Button variant="mybutton">Button</Button>
      <br />
      <Checkbox defaultChecked /> deneme
    </div>
  );
}
