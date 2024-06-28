import { Button } from "@/components/ui/button"

export default function Buttons({ title = 'click' }: { title?: string }) {
  return <Button>{title}</Button>
}

Buttons.Error = ({ title = 'click' }) => <Button variant={'destructive'}>{title}</Button>
// add click event
Buttons.Click = ({ title = 'click', handle }: {
  title?: string
  handle: () => void
}) => <Button
  onClick={handle}
  variant={'default'}>{title}</Button>