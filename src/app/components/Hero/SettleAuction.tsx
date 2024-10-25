import Image from "next/image";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { AuctionABI } from "@buildersdk/sdk";
import { Address } from "viem";

export const SettleAuction = ({ auction }: { auction?: string }) => {
  if (!auction) {
    return null; // Render nothing or a loading state if auction is undefined
  }

  const { config, error: prepareError } = usePrepareContractWrite({
    address: auction as Address,
    abi: AuctionABI,
    functionName: "settleCurrentAndCreateNewAuction",
  });

  const {
    data,
    write,
    isLoading: contractLoading,
    error: writeError,
  } = useContractWrite(config);

  const { isLoading: transactionLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  const isLoading = contractLoading || transactionLoading;
  const isError = prepareError || writeError;

  return (
      <button
          onClick={() => write?.()}
          disabled={!write || isLoading}
          className="w-full bg-skin-button-accent hover:bg-skin-button-accent-hover text-skin-inverted h-12 mt-6 rounded-lg flex items-center justify-around"
      >
        {isLoading ? (
            <Image src="/spinner.svg" height={26} width={26} alt="spinner" />
        ) : (
            <span>Settle Auction</span>
        )}
        {isError && <p className="text-red-500">Error: {isError.message}</p>}
      </button>
  );
};
