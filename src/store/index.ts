import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Store
import { RootState, AppDispatch } from './configureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;