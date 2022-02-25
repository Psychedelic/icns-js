export const idlReserveNameFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const ReserveName = IDL.Service({
    'addController' : IDL.Func([IDL.Principal], [Result], []),
    'addReserve' : IDL.Func([IDL.Text], [Result], []),
    'addReserveBatch' : IDL.Func([IDL.Text], [Result], []),
    'removeController' : IDL.Func([IDL.Principal], [Result], []),
    'reserve' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
  });
  return ReserveName;
};
// export const init = ({ IDL }) => { return [IDL.Principal]; };
