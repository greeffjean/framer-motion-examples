import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
    component: TextArea,
};

type Story = StoryObj<typeof TextArea>

export const TextAreaStandard: Story = {
    render: () => <TextArea />
}

export default meta;