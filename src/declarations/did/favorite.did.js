export const idlFavoriteFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const Favorite = IDL.Service({
    'addFavoriteName' : IDL.Func([IDL.Text], [Result], []),
    'getUserFavoriteNames' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(IDL.Vec(IDL.Text))],
        ['query'],
      ),
    'isFavorite' : IDL.Func([IDL.Principal, IDL.Text], [IDL.Bool], ['query']),
    'removeFavoriteName' : IDL.Func([IDL.Text], [Result], []),
    'setFavoriteLimit' : IDL.Func([IDL.Nat], [IDL.Nat], []),
  });
  return Favorite;
};
const init = ({ IDL }) => { return [IDL.Principal]; };
