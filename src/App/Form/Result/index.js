import React from 'react';

export const Result = ({ result }) => (
    <p className="form__paragraph">
        <span className="form__labelText form__labelText--smaller"> {
            result !== undefined && (
                <>
                    {result.fromAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                        {result.toAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </span>
    </p>
);
