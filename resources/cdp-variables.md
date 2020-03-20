guy -> addr: some address
wad -> fxp18Int: fixed point decimal with 18 decimals (for basic quantities, e.g. balances)
ray -> fxp27Int: fixed point decimal with 27 decimals (for precise quantites, e.g. ratios)
rad -> fxp45Int: fixed point decimal with 45 decimals (result of integer multiplication with a `wad` and a `ray`)
file -> changeConfig: administer some configuration value
auth -> isAuthorized: check whether an address can call this method
ward -> authenticatedAddress: an address that is allowed to call authed methods
rely -> authorizeAddress: allow an address to call authed methods
deny -> deauthorizeAddress: disallow an address from calling authed methods
CDP: Collateralised Debt Position
gem -> collateralTokens: collateral tokens
dai: stablecoin tokens
sin -> badDebt: anticoin tokens
ilk -> collateralType: a collateral type
rate -> debtMultiplierIncludingStabilityFee: stablecoin debt multiplier (accumulated stability fees)
Ink -> totalCollateralBalance: total collateral balance
Art -> totalStablecoinDebt: total stablecoin debt
init -> createNewCollateralType: create a new collateral type
urn -> cdp: a specific CDP
ink -> collateralBalance: collateral balance
art -> stablecoinDebt: stablecoin debt
debt -> stablecoinSupply: the total quantity of stablecoin
vice -> badDebtSupply: the total quantity of anticoins
slip -> modifyUsersCollateralBalance: modify a user's collateral balance
flux -> transferCollateral: transfer collateral between users
move -> move: transfer stablecoin between users
grab -> liquidateCDP: liquidate a CDP
fold -> changeDebtMultiplier: modify the debt multiplier, creating / destroying corresponding debt
toll -> changeCollateralMultiplier: modify the collateral multiplier, creating / destroying corresponding collateral
spot -> maxDaiPerUnitOfCollateral: collateral price with safety margin, i.e. the maximum stablecoin allowed per unit of collateral
line -> debtCeiling: the debt ceiling for a specific collateral type
Line -> totalDebtCeiling: the total debt ceiling for all collateral types
frob -> modifyCDP: modify a CDP
lock -> transferCollateralToCDP: transfer collateral into a CDP
free -> transferCollateralFromCDP: transfer collateral from a CDP
draw -> increaseCDPDebt: increase CDP debt, creating Dai
wipe -> decreaseCDPDebt: decrease CDP debt, destroying Dai
dink -> changeInCollateral: change in collateral
dart -> changeInDebt: change in debt
calm -> isCdpBelowCollateralAndTotalDebtCeilings: true when the CDP remains under both collateral and total debt ceilings
cool -> isCdpDaiDebtNonIncreasing: true when the stablecoin debt does not increase
firm -> isCdpCollateralBalanceNonDecreasing: true when the collateral balance does not decrease
safe -> isCdpSafe: true when the CDP's ratio of collateral to debt is above the collateral's liquidation ratio
rho -> collateralTypeLastStabilityFeeCollectionTimestamp: when this collateral type was last collected from
drip -> increaseStabilityFee: determine the increase
chop -> liquidationPenalty: the liquidation penalty
lump -> liquidationQuantity: the liquidation quantity, i.e. the fixed debt quantity to be covered by any one liquidation event
bite -> liquidateCdp: initiate liquidation of a CDP
Bite -> LiquidateCdp
sin -> badDebtQueue: the debt queue
Sin -> TotalDebtInDebtQueue: the total debt in the queue
Woe -> TotalNonQueuedNonAuctionDebt: the total non-queued non-auction debt
Ash -> TotalOnAuctionDebt: the total on-auction debt
Awe -> TotalDebt: the total debt
Joy -> TotalSurplus: the total surplus
fess -> addDebtToDebtQueue: add debt to the queue
flog -> removeDebtFromDebtQueue: realise debt from the queue
wait -> debtQueueLength: length of the queue
heal -> settleDebtUsingSurplus: cancel out surplus and debt
kiss -> settleOnAuctionDebtUsingSurplus: cancel out surplus and on-auction debt
sump -> debtAuctionLotSize: debt auction lot size, i.e. the fixed debt quantity to be covered by any one debt auction
bump -> surplusAuctionLotSize: surplus auction lot size, i.e. the fixed surplus quantity to be sold by any one surplus auction
hump -> surplusAuctionBuffer: surplus buffer, must be exceeded before surplus auctions are possible
CollateralForDaiAuctionper -> CollateralForDaiAuction
MkrForDaiDebtAuction -> mkrForDaiDebtAuction: debt auction (covering debt by inflating MKR and selling for stablecoins)
MkrForDaiDebtAuctionper -> MkrForDaiDebtAuction
DaiForMkrSurplusAuction -> daiForMkrSurplusAuction: surplus auction (selling stablecoins for MKR)
DaiForMkrSurplusAuctionper -> DaiForMkrSurplusAuction
lot: quantity up for auction
bid: quantity being offered for the lot
debtPlusStabilityFee / totalDaiWanted: total dai to be raised (in CollateralForDaiAuction auction)
gal -> incomeRecipient: recipient of auction income
ttl: bid lifetime
beg -> minimumBidIncrease: minimum bid increase
tau -> maximumAuctionDuration: maximum auction duration
end -> auctionEndTimestamp: when the auction will finish
kick -> startAuction: start an auction
Kick -> StartAuction
tick -> restartAuction: restart an auction
tend -> makeBidIncreaseBidSize: make a bid, increasing the bid size
dent -> makeBidDecreaseLotSize: make a bid, decreasing the lot size
deal -> claimWinningBid: claim a winning bid
vat -> cdpDatabase
VatLike -> cdpDatabaseInterface
jug -> stabilityFeeDatabase
Fusspot -> AuctionInterface
vow -> settlement
addr -> highBidder: high bidder
CollateralForDaiAuction -> collateralForDaiAuction: collateral auction (selling collateral for stablecoins)
Hopeful -> ApprovalInterface
fuss -> auction
quantity of debt
[UNUSED] tax -> stabilityFee: the stability fee
[UNUSED] repo -> globalStabilityFee: global stability fee
