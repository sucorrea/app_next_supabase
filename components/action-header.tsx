import Link from 'next/link'
import { Button } from './ui/button'

const ActionHeader = () => (
  <div className="flex gap-4 items-center">
    <div className="flex gap-2">
      <Button
        asChild
        size="sm"
        variant={'outline'}
        disabled
        className="opacity-75 cursor-none pointer-events-none"
      >
        <Link href="/sign-in">Entrar</Link>
      </Button>
      <Button
        asChild
        size="sm"
        variant={'default'}
        disabled
        className="opacity-75 cursor-none pointer-events-none"
      >
        <Link href="/sign-up">Cadastrar</Link>
      </Button>
    </div>
  </div>
)

export default ActionHeader
