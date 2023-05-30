import { IconButton } from '@/components/IconButton/IconButton'
import { abbreviateAccount } from '@/utils/abbreviate-account'
import { copyToClipboard } from '@/utils/copy-to-clipboard'
import { getExplorerAddressURL } from '@/utils/get-explorer-url'

const NftOwner = ({ owner }) => {
  return (
    <div className='nft owner'>
      <div className='title'>Owner</div>
      <div className='content'>
        <div>

          {abbreviateAccount(owner)}
        </div>
        <IconButton
          showFeedback
          size='sm' variant='copy-01' onClick={() => {
            copyToClipboard(owner)
          }}
        />
        <a href={getExplorerAddressURL(owner)} target='_blank'>
          <IconButton size='sm' variant='link-03' />
        </a>

      </div>
    </div>
  )
}

export default NftOwner
