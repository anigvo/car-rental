import { Puff } from "react-loader-spinner"
import { SuspenseLoader } from "./Loader.styled.jsx"

export const Loader = () => {
    return (
      <SuspenseLoader>
        <Puff
          width='200'
          color="#3E85F3"
          ariaLabel="puff-loading"
        />
      </SuspenseLoader>
    )
}