import SearchBox from './SearchBox';
import { render, fireEvent, getByTestId } from '@testing-library/react';


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        q: 'Test', hits: [{
            "recipe": {label: 'Multi-Grain Pasta with Sicilian'}}]
    })
}))

describe('Search Box', () => {
    it('searchBox should load', () => {
        const {container} = render(<SearchBox/>);
        expect(container).not.toBeNull();
    });

    it ('should check text for label', () => {
        const {container} = render(<SearchBox/>);
        expect(container.getElementsByTagName('label')[0].textContent).toBe('Search');
    });
})