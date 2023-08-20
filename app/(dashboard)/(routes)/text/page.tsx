import Heading from "@/components/heading"
import { routeConfig } from "@/config/route-config"

const TextPage = () => {
  const { label, description, icon, color, bgColor } = routeConfig[1]
  
  return (
    <div>
      <Heading
        label={label}
        description={description}
        icon={icon}
        color={color}
        bgColor={bgColor}
      />
    </div>
  )
}

export default TextPage