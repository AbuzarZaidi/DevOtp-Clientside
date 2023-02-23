import React from 'react'
import { P2PackageDiv,P2Center,P2Center2,P2Text1,P2Text2,P2Text3,P2Text4,P2Circle,P2ChoosePlanButton,P2ChoosePlanButtonText } from './SinglePackageStyle'
const SinglePackage = ({name}) => {
  return (
    <P2PackageDiv>
<P2Center>
<P2Text1>{name}</P2Text1>
</P2Center>
<P2Center>
<P2Circle>
    <P2Text2>$100</P2Text2>
    <P2Text3>/month</P2Text3>
</P2Circle>
</P2Center>
<P2Center2>
<P2Text4>Single Account</P2Text4>
<P2Text4>Unlimited Device</P2Text4>
<P2Text4>25 Sms Per Minute</P2Text4>
<P2Text4>25 Sms Per Minute</P2Text4>
<P2Text4>Unlimited SMS</P2Text4>
<P2Text4>Email/Phone Support</P2Text4>
<P2Text4>Free Api</P2Text4>
</P2Center2>
<P2Center><P2ChoosePlanButton>
    <P2ChoosePlanButtonText>
Choose Plan
    </P2ChoosePlanButtonText>
    </P2ChoosePlanButton></P2Center>
    </P2PackageDiv>
  )
}

export default SinglePackage